import { MenuScreen } from './components/MenuScreen'
import { menuCategories, restaurantName } from './data/menu'
import { themeResponse } from './data/themeResponse'

function App() {
  return (
    <MenuScreen
      themeData={themeResponse}
      restaurantName={restaurantName}
      categories={menuCategories}
    />
  )
}

export default App
