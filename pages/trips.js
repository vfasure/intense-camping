import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default class Trips extends React.Component {

  render() {
    const trips = [{
      slug: '',
      title: 'Mount Rainier Ice Caving',
      prettyDate: 'November 2017',
      thumbnailUrl: '/images/14932421947_a18281e563_b.jpg',
      canRegister: true
    },{
      slug: '',
      title: 'Yosemite Hut Traverse',
      thumbnailUrl: '/images/glacier-point-road-xc-ski-and-half-dome-1-crop-x600.jpg',
      prettyDate: 'December 2017',
      canRegister: true
    }]

    return (
      <div className="root">
        <Head>
          <meta charSet="utf-8"/>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <title>Intense Camping</title>
        </Head>
        <style jsx>{`
          .root {
            font-family: sans-serif;
            line-height: 1.33rem;
            margin-top: 8vh,
          }
          @media (min-width: 600px) {
            .root {
              margin-left: 21vw;
              margin-right: 21vw;
            }
          }
          img {
            max-width: 100%;
          }
        `}</style>

        <h1>Intense Trips</h1>
        
        {trips.map( trip => (
          <div>
            <h2>{trip.title}</h2>
            <p>{trip.prettyDate} <a href='#' onClick={this.requestReservation}>Reserve</a></p>
            <img src={trip.thumbnailUrl} alt=''/>
          </div>
        ))}
      </div>)
  }

  requestReservation = (event) => {
    event.preventDefault()
    fetch('/api/reserve', {
      method: 'post',
      body: JSON.stringify({ name: 'Joe Rodeo' })
    })
  }
}