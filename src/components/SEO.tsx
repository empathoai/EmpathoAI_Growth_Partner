
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEO: React.FC = () => {
    const location = useLocation();
    const baseUrl = 'https://empathoai.com';

    useEffect(() => {
        // 1. Manage Canonical Tag
        let link: HTMLLinkElement | null = document.querySelector("link[rel='canonical']");

        if (!link) {
            link = document.createElement('link');
            link.setAttribute('rel', 'canonical');
            document.head.appendChild(link);
        }

        // Construct full canonical URL without trailing slash (unless it's the root)
        const path = location.pathname === '/' ? '' : location.pathname;
        link.setAttribute('href', `${baseUrl}${path}`);

        // 2. Dynamic Title updates (optional but good for UX/SEO)
        const routeTitles: Record<string, string> = {
            '/': 'EmpathoAI | Sovereign Growth Partner',
            '/privacy-policy': 'Privacy Protocol | EmpathoAI',
            '/terms-of-service': 'Terms of Service | EmpathoAI',
            '/cookie-policy': 'Cookie Governance | EmpathoAI'
        };

        document.title = routeTitles[location.pathname] || 'EmpathoAI | Sovereign Infrastructure';

    }, [location]);

    return null; // This component doesn't render any UI
};

export default SEO;
