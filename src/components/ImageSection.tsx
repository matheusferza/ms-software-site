import Image from 'next/image';
import React from 'react';

type ImageSectionProps = {
  type?: string;
  title?: string;
  subtitle?: string;
  image?: {
    url: string;
    alt?: string;
  };
  styles?: {
    self?: {
      textAlign?: string;
      padding?: string[];
      margin?: string[];
    };
  };
};

const ImageSection: React.FC<ImageSectionProps> = ({ title, subtitle, image, styles }) => {
  const textAlign = styles?.self?.textAlign || 'center';
  const padding = styles?.self?.padding?.join(' ') || 'p-0';

  return (
    <section
      className={`relative w-full h-screen flex flex-col items-center justify-center text-${textAlign} ${padding}`}
    >
      {/* 🔹 Imagem de fundo ocupando toda a área */}
      {image?.url && (
        <Image
          src={image.url}
          alt={image.alt || 'Imagem de fundo'}
          fill
          className="object-cover object-center z-0"
          priority
        />
      )}

      {/* 🔹 Overlay (opcional, pode ajustar opacidade ou remover) */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* 🔹 Conteúdo (opcional) */}
      <div className="relative z-20 text-white px-8 text-center">
        {title && <h2 className="text-4xl font-bold mb-4 drop-shadow-lg">{title}</h2>}
        {subtitle && <p className="text-xl drop-shadow">{subtitle}</p>}
      </div>
    </section>
  );
};

export default ImageSection;
