import React from 'react'
import { Layout } from '../components/layout/LayoutBackOffice'
import { cardBackoffice } from './../mocks/layoutMock';

export const BackOffice = () => {
  return (
    <Layout>

      {
        cardBackoffice.map(c=>(
          <>
          <p>{c.name}</p>
          <img src={c.icon}/>

          </>
        ))
      }
    </Layout>
  )
}
