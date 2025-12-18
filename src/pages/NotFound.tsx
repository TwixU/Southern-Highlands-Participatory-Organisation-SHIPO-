import Section from '../components/ui/Section';
import Button from '../components/ui/Button';

const NotFound = () => {
    return (
        <div className="not-found-page">
            <Section className="text-center py-20">
                <h1 className="text-primary mb-4" style={{ fontSize: '6rem', lineHeight: 1 }}>404</h1>
                <h2 className="mb-6">Page Not Found</h2>
                <p className="mb-8 text-muted max-w-md mx-auto">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>
                <Button to="/">Back to Home</Button>
            </Section>
        </div>
    );
};

export default NotFound;
