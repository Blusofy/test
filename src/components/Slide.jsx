// /**
//  * Date:05/04/2021
//  * Author: Muhammad Minhaj
//  * Title: SLIDE SHOW
//  * Description: Web Static Slide
//  * * */
import { Button, Divider, Grid, Typography } from '@material-ui/core';

function Slide() {
    return (
        <div>
            <Grid container>
                <Grid item sm={6}>
                    <Typography variant="h2" color="primary">
                        Welcome To Informative Coding
                    </Typography>
                    <br />
                    <br />
                    <Divider />

                    <Typography variant="button" color="textSecondary">
                        This is a non-profit organization for learning programming-related topics.
                        You can learn on this platform all about Programming, Data Structures &
                        Algorithms, and New Technologies.
                    </Typography>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <Button
                        color="primary"
                        variant="outlined"
                        size="large"
                        style={{ marginRight: '0.5rem' }}
                    >
                        Get APPs
                    </Button>
                    <Button color="primary" variant="contained" size="large">
                        Learn To Code
                    </Button>
                </Grid>
                <Grid item sm={6}>
                    <div style={{ maxWidth: '450px', float: 'right' }}>
                        <img
                            src="/static/images/slide4.jpg"
                            alt="sldie"
                            width="100%"
                            height="100%"
                        />
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default Slide;
