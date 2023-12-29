"use client"

import { Input, Title } from 'kuui-react'
import classes from './Home.module.scss'

export default function Home() {
	return (
		<main className={classes.root}>
			<Title>Paste a link to a YouTube video</Title>
			<Input variant='text' placeholder='Link' />
			{/* <iframe
				className={classes.iframe}
				src={link}
				title='YouTube video player'
				frameBorder='0'
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
				allowFullScreen
			></iframe> */}
		</main>
	)
}
