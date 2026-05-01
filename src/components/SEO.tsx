import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEO: React.FC = () => {
    const location = useLocation();
    const baseUrl = 'https://empathoai.com';

    useEffect(() => {
        let link: HTMLLinkElement | null = document.querySelector("link[rel='canonical']");

        if (!link) {
            link = document.createElement('link');
            link.setAttribute('rel', 'canonical');
            document.head.appendChild(link);
        }

        const path = location.pathname === '/' ? '' : location.pathname;
        link.setAttribute('href', `${baseUrl}${path}`);

        const routeMeta: Record<string, { title: string; description: string }> = {
            '/': {
                title: 'Why Your Business Is Not Growing | Fix Your System',
                description: 'Your business is not growing because your system is broken. Identify what is slowing growth and fix it.'
            },
            '/about': {
                title: 'About EmpathoAI | Growth Architecture',
                description: 'EmpathoAI diagnoses why businesses don’t grow and builds the system to fix it.'
            },
            '/why-your-business-is-not-growing': {
                title: 'Why Your Business Is Not Growing | EmpathoAI',
                description: 'If your business is not growing, the issue is not marketing. It is your system. Learn what is broken and how to fix it.'
            },
            '/privacy-policy': {
                title: 'Privacy Protocol | EmpathoAI',
                description: 'EmpathoAI privacy protocol and data governance information.'
            },
            '/terms-of-service': {
                title: 'Terms of Service | EmpathoAI',
                description: 'EmpathoAI terms of service and partnership protocol.'
            },
            '/cookie-policy': {
                title: 'Cookie Governance | EmpathoAI',
                description: 'EmpathoAI cookie protocol and technological tracking information.'
            }
        };

        const meta = routeMeta[location.pathname] || {
            title: 'EmpathoAI | Sovereign Infrastructure',
            description: 'EmpathoAI growth infrastructure.'
        };

        document.title = meta.title;

        let metaDescription: HTMLMetaElement | null = document.querySelector("meta[name='description']");
        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.setAttribute('name', 'description');
            document.head.appendChild(metaDescription);
        }
        metaDescription.setAttribute('content', meta.description);
    }, [location]);

    return null;
};

export default SEO;
