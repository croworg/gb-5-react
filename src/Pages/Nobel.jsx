import React, {useState} from 'react';
import {API} from "../constants";

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {Card, CardActions, CardContent, LinearProgress, Typography} from "@mui/material";

const Nobel = () => {
    const [laureates, setLaureates] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const getLaureates = async () => {
        setLoading(true);
        setError('');
        try {
            const res = await fetch(API);
            // const res = await fetch('http://hello.com/api'); // For error testing
            if (!res.ok) throw new Error(`Request failed with status ${res.status}`);

            const data = await res.json();
            setLaureates(data.laureates);
        } catch (err) {
            return setError(`Error: ${err.message}`);
        } finally {
            setLoading(false);
        }
    };

    // useEffect(() => {
    //     getLaureates();
    // }, []);

    return (
        <div className={'page-wrapper'}>
            <Box sx={{marginBottom: '1rem'}}>
                <Typography variant={'h5'}>Nobel Prize Page</Typography>
            </Box>
            <Button variant={'contained'} color={'success'} onClick={getLaureates}>
                Load info
            </Button>
            {loading && (
                <Box style={{margin: '1rem 0'}}>
                    <LinearProgress color="success"/>
                </Box>
            )}
            {!loading && laureates.map((item) => (
                <Box sx={{margin: '1rem 0'}} key={item.id}>
                    <Card sx={{minWidth: 275}}>
                        <CardContent>
                            <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                                Laureate
                            </Typography>
                            <Typography variant="h5" component="div">
                                {item.fullName.en}
                            </Typography>
                            <Typography sx={{mb: 1.5}} color="text.secondary">
                                Birthdate: {item.birth.date}
                            </Typography>
                            <Typography variant="body2">
                                {item.birth.place?.locationString.en}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" href={item.sameAs[0]}>Learn more on wiki page</Button>
                        </CardActions>
                    </Card>
                </Box>
            ))}
            {error && (
                <Box sx={{ my: '1rem'}}>
                    <Typography sx={{my: '.5rem', color: 'red'}}>{error}</Typography>
                    {/*<Button variant={'contained'} color={'error'} onClick={getLaureates}>retry</Button>*/}
                </Box>
            )}
        </div>
    );
};

export default Nobel;