import { Fragment } from 'react';
import styles from './Desktop.module.scss';
import Button from '@mui/material/Button';

const Desktop = () => {
    return (
        <Fragment>
            <h1 className={styles["page-title"]}>Desktop</h1>
            <Button variant="contained" color="primary">
                Hello World
            </Button>
        </Fragment>
    );
};

export default Desktop;