import { MenuScreen } from './components/MenuScreen'
import { menuCategories, restaurantName, restaurantTagline } from './data/menu'
import { themeResponse } from './data/themeResponse'

function App() {
  return (
    <MenuScreen
      themeData={themeResponse}
      restaurantName={restaurantName}
      restaurantTagline={restaurantTagline}
      categories={menuCategories}
    />
  )
}

export default App
