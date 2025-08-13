import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

import { Header } from './Styles';
import usePhrasesStore from '../../store/usePhrasesStore';
import type { FC } from 'react';
import { Tooltip } from '@mui/material';

interface CardProps {
    id: string
}

const Card: FC<CardProps> = ({ id }) => {
    const deletePhrase = usePhrasesStore((s) => s.removePhrase);
    const handleOnDelete = () => {
        deletePhrase(id);
    }

    return (
        <Header >
            <Tooltip title="Delete Phrase">
                <IconButton aria-label='delete-phrase' sx={{ padding: 0 }} onClick={handleOnDelete} >
                    <DeleteIcon />
                </IconButton>
            </Tooltip>
        </Header>
    );
};

export default Card;
