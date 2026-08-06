import CityLandingPage from '@/components/city/CityLandingPage'
import { getCity, cityMetadata } from '@/lib/content/cities-data'

const city = getCity('paris-8')

export const metadata = cityMetadata(city)

export default function Page() {
  return <CityLandingPage city={city} />
}
