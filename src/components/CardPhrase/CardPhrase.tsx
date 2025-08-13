import { type FC } from 'react';
import { default as CardMaterial } from '@mui/material/Card';
import Fade from '@mui/material/Fade';
import { Text, CardContentWrapper } from './Styles';
import Header from './Header';

interface CardPhraseProps {
    id: string;
    children: React.ReactNode;
}
const CardPhrase: FC<CardPhraseProps> = ({ children, id }) => {
    return (
        <Fade in={true} timeout={500} >
            <CardMaterial sx={{ width: '180px', height: '200px' }}>
                <CardContentWrapper>
                    <Header id={id} />
                    <Text>{children}</Text>
                </CardContentWrapper>
            </CardMaterial>
        </Fade>
    );
};

export default CardPhrase;