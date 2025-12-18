import type { ReactNode } from 'react';

interface SectionProps {
    children: ReactNode;
    className?: string;
    bg?: 'white' | 'light' | 'dark' | 'primary' | 'image';
    id?: string;
    bgImage?: string;
}

const Section = ({
    children,
    className = '',
    bg = 'white',
    id,
    bgImage
}: SectionProps) => {
    const bgStyle = bgImage ? { backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {};

    return (
        <section
            id={id}
            className={`section section--${bg} animate-fade-in ${className}`}
            style={bgStyle}
        >
            <div className="container">
                {children}
            </div>
            <style>{`
        .section {
          padding: 5rem 0;
          position: relative;
        }

        .section--white { background-color: var(--bg-surface); }
        .section--light { background-color: var(--bg-body); }
        .section--dark { background-color: var(--bg-dark); color: white; }
        .section--primary { background-color: var(--primary); color: white; }
        
        .section--image {
          position: relative;
          color: white;
        }

        .section--image::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.6);
          z-index: 1;
        }

        .section--image > .container {
          position: relative;
          z-index: 2;
        }
      `}</style>
        </section>
    );
};

export default Section;
