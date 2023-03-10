import Head from 'next/head'
import data from '../data/employees.json'
import Link from 'next/link'
import { useState } from 'react'
import Card from '@/components/Card/about'
import styles from '@/styles/About.module.css'
import { Unbounded } from '@next/font/google'


export default function About() {
    const [information, setInformation] = useState([...data])

    return (
        <>
            <Head>
                <title>About Employees</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={styles.main}>
                <div class="navbar">
                    <div class="nav-title">Wotakoi Digital Marketing Agency</div>
                    <div class="nav-button">
                        <Link className={styles.link} href="..">Back to Main Page</Link>
                    </div>
                </div>
                {
                    information && information.map((info, index) => {
                        return (
                            <Card 
                                class="employeeID"
                                key={index} 
                                name={info.name} 
                                email={info.email} 
                                font="17px"
                                fontColour="#FFFF"
                                colourCard="#FFFF"
                                colourInfo="#FF9BE4" 
                            />
                        )
                    })
                }
            </main>
        </>
    )
}