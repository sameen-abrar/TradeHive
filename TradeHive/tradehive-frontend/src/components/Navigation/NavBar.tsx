import { Button, Group } from '@mantine/core'
import { useNavigate } from 'react-router-dom'

export default function NavBar() {
    const navigate = useNavigate();
  return (
    <Group justify="center" mt="xl">
      <Button color="cyan" onClick={() => navigate('/')}>Login</Button>
      <Button color="cyan" onClick={() => navigate('/products/by/user')}>Products List by User</Button>
      <Button color="cyan" onClick={() => navigate('/products')}>All Products List</Button>
      <Button color="cyan" onClick={() => navigate('/products/add')}>Add Product</Button>
      <Button color="cyan" onClick={() => navigate('/products/filtered')}>Product Category list</Button>
    </Group>
  )
}
