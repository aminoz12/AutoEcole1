import CityLandingPage from '@/components/city/CityLandingPage'
import { getCity, cityMetadata } from '@/lib/content/cities-data'

const city = getCity('suresnes')

export const metadata = cityMetadata(city)

export default function Page() {
  return <CityLandingPage city={city} />
}
