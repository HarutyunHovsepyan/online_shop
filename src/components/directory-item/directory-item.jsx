import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from './directory-item.styles'

import { useNavigate } from 'react-router-dom'

const DirectoryItem = ({ category }) => {
  const { imageurl, title, route } = category
  const navigate = useNavigate()
  const onNaviageteHandler = () => navigate(route)
  return (
    <DirectoryItemContainer onClick={onNaviageteHandler}>
      <BackgroundImage imageUrl={imageurl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  )
}

export default DirectoryItem
