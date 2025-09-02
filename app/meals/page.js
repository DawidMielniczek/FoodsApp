import MealsGrid from '@/components/meals/meals-grid';
import classes from './page.module.css';
import Link from 'next/link';

export default function MealsPage() {
    return (
        <>
            <header className={classes.header}>
                <h1>
                    Delicius meals, created <span className={classes.highlight}> by you</span>
                </h1>
                <p>
                    Choose your favorite recipe and cook it yourself.
                </p>
                <p className={classes.cta}>
                    <Link href='/meals/share'>
                        Share you favorite recipe
                    </Link>
                </p>
            </header>
            <main className={classes.main}>
                <MealsGrid meals={[]} />
            </main>
        </>
    );
}