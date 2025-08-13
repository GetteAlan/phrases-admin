import { Button, Stack, TextField, Tooltip } from '@mui/material';
import { useState } from 'react';
import usePhrasesStore from '../../store/usePhrasesStore';

export default function ActionsBar() {
    const [phrase, setPhrase] = useState('');
    const addPhrase = usePhrasesStore((s) => s.addPhrase);
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhrase(e.target.value);
    }

    const handleAddPhrase = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleAdd();
        }
    }

    const handleAdd = () => {
        if (phrase.trim()) {
            addPhrase(phrase);
            setPhrase('');
        }
    };

    return (
        <Stack direction="row" spacing={2} sx={{ width: '100%' }}>
            <TextField
                fullWidth
                focused
                variant="standard"
                placeholder="Add Phrase"
                value={phrase}
                autoComplete="off"
                onChange={handleOnChange}
                onKeyDown={handleAddPhrase}
                inputProps={{ maxLength: 255 }}
            />
            <Tooltip title="Add New Phrase">
                <Button variant="contained" onClick={handleAdd}>
                    Add
                </Button>
            </Tooltip>
        </Stack>
    );
};