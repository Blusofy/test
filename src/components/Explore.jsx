// /**
//  * Date:05/04/2021
//  * Author: Muhammad Minhaj
//  * Title: SERVICES
//  * Description: Web services
//  * * */
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Grid,
    IconButton,
    Typography,
} from '@material-ui/core';
import {
    Code as CodeIcon,
    DataUsage as DataUsageIcon,
    ShowChart as ShowChartIcon,
} from '@material-ui/icons';
import Link from 'next/link';

const styleObj = { width: '4rem', height: '4rem' };

const exploreList = [
    {
        name: 'Programming',
        icon: <CodeIcon style={styleObj} />,
        url: '/programming',
    },
    {
        name: 'Data Structures',
        icon: <DataUsageIcon style={styleObj} />,
        url: '/data-structures',
    },
    {
        name: 'Algorithms',
        icon: <ShowChartIcon style={styleObj} />,
        url: '/algorithms',
    },
];

function CustomCard({ name, url, icon }) {
    return (
        <Grid item sm={4}>
            <Card raised style={{ margin: '0.75rem' }}>
                <CardContent>
                    <Box display="flex" flexDirection="column" alignItems="center">
                        <IconButton>{icon}</IconButton>
                        {/* {icon} */}
                        <Typography variant="h5" color="primary">
                            {name}
                        </Typography>
                        <br />
                        <Typography variant="body2" color="textSecondary" align="center">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate
                            explicabo hic expedita error in, corporis delectus cumque quia alias
                            porro, excepturi unde sequi commodi esse?
                        </Typography>
                    </Box>
                </CardContent>
                <CardActions>
                    <Link href={url}>
                        <Button color="primary" fullWidth>
                            Get Start Now
                        </Button>
                    </Link>
                </CardActions>
            </Card>
        </Grid>
    );
}

function Services() {
    return (
        <>
            <Typography variant="h4" color="primary" align="center">
                Explore
            </Typography>
            <Grid container>
                {exploreList.map((elem) => (
                    <CustomCard {...elem} key={elem.name} />
                ))}
            </Grid>
        </>
    );
}
export default Services;
