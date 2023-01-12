import React, { useEffect, useState } from 'react'
import { NextPage } from 'next'
import { ICountry } from './index'

interface CountryProps {
  country: ICountry
}

const Country: NextPage<CountryProps> = ({ country }) => {
  return (
    <div>
        {JSON.stringify(country)}
    </div>
  )
}

export const getServerSideProps = async (ctx) => {
  const name = ctx.params?.name
  const res = await fetch(`https://restcountries.com/v3.1/name/${name}`)
  const data = await res.json()
  return { props: { country: data[0] }
}
}

export default Country
