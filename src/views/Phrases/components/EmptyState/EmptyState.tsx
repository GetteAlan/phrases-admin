import { Card, CardContent, Fade } from '@mui/material';
import { Container, Text } from './Styles';
import EmptyStateSVG from './EmptyStateSVG';

export default function EmptyState() {
    return (
        <Container>
            <Fade in={true} timeout={500}>
                <Card sx={{ margin: '32px' }}>
                    <CardContent sx={{ height: '-webkit-fill-available', padding: '32px', display: 'flex', gap: '32px', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Text>There are no phrases to visualize here yet.</Text>
                        <EmptyStateSVG width={250} height={250} />
                    </CardContent>
                </Card>
            </Fade> 
        </Container>
    );
};