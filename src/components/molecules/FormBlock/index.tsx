import classNames from 'classnames';
import * as React from 'react';

import { Annotated } from '@/components/Annotated';
import { DynamicComponent } from '@/components/components-registry';
import { mapStylesToClassNames as mapStyles } from '@/utils/map-styles-to-class-names';

export default function FormBlock(props) {
    const formRef = React.useRef<HTMLFormElement>(null);
    const { elementId, className, fields = [], submitLabel, styles = {} } = props as any;
    const submissionMode = props.submissionMode || 'alert';
    const submissionEmail = props.submissionEmail || '';
    const submissionSubject = props.submissionSubject || 'Novo contato pelo site';

    if (fields.length === 0) {
        return null;
    }

    function handleSubmit(event) {
        event.preventDefault();

        const data = new FormData(formRef.current);
        const value = Object.fromEntries(data.entries());

        if (submissionMode === 'mailto' && submissionEmail) {
            const body = Object.entries(value)
                .filter(([, fieldValue]) => String(fieldValue || '').trim().length > 0)
                .map(([fieldName, fieldValue]) => `${formatFieldLabel(fieldName)}: ${String(fieldValue).trim()}`)
                .join('\n');

            const mailtoUrl = `mailto:${submissionEmail}?subject=${encodeURIComponent(submissionSubject)}&body=${encodeURIComponent(body)}`;
            window.location.href = mailtoUrl;
            return;
        }

        alert(`Form data: ${JSON.stringify(value)}`);
    }

    return (
        <Annotated content={props}>
            <form className={className} name={elementId} id={elementId} onSubmit={handleSubmit} ref={formRef}>
                <div className="grid gap-6 sm:grid-cols-2">
                    <input type="hidden" name="form-name" value={elementId} />
                    {fields.map((field, index) => {
                        return <DynamicComponent key={index} {...field} />;
                    })}
                </div>
                <div className={classNames('mt-8', mapStyles({ textAlign: styles.self?.textAlign ?? 'left' }))}>
                    <button
                        type="submit"
                        className="action-button action-button-primary"
                    >
                        {submitLabel}
                    </button>
                </div>
            </form>
        </Annotated>
    );
}

function formatFieldLabel(fieldName: string) {
    const labelMap = {
        name: 'Nome',
        company: 'Empresa',
        phone: 'Telefone',
        email: 'E-mail',
        message: 'Mensagem'
    };

    return labelMap[fieldName] || fieldName;
}
