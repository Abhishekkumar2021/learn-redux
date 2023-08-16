import { Stack, Typography, Button, Card, CardHeader, CardContent, CardActions, ImageList, ImageListItem,List, ListItem, ListItemText, Alert,} from '@mui/material'
import './App.css'
import { useAppDispatch, useAppSelector } from './app/hooks'
import { increment, decrement, reset, incrementBy, set } from './features/counter/counterSlice'
import { RootState } from './app/store'
import { useGetPhotosQuery,  useGetPostsQuery } from './features/Todo/todoSlice'

function App() {
  const counter = useAppSelector((state: RootState) => state.counter.value)
  const dispatch = useAppDispatch()
  const { data : photoData = [], isFetching: isFetchingPhotots , error: photoError } = useGetPhotosQuery(2)
  const { data : postData = [], isFetching: isFetchingPosts , error: postError } = useGetPostsQuery()

  return (
    <Stack sx={{ width: "100%", minHeight: "100vh" }} alignItems="center" justifyContent="center">
      <Card variant="outlined"  >
        <CardHeader title="Counter" />
        <CardContent>
          <Typography variant="h1" component="div">
            {counter}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" onClick={() => dispatch(increment())} disableElevation>Increment</Button>
          <Button variant="contained" onClick={() => dispatch(decrement())} disableElevation>Decrement</Button>
          <Button variant="contained" onClick={() => dispatch(reset())} disableElevation>Reset</Button>
          <Button variant="contained" onClick={() => dispatch(incrementBy(5))} disableElevation>Increment by 5</Button>
          <Button variant="contained" onClick={() => dispatch(set(10))} disableElevation>Set to 10</Button>
        </CardActions>
      </Card>
      {
        isFetchingPhotots ? <Typography variant="h1" component="div">Loading...</Typography> : (
          <ImageList variant="masonry" cols={5} gap={5} sx={{ width: "100%" }}>
            {photoData.map((item) => (
              <ImageListItem key={item.id}>
                <img
                  src={`${item.thumbnailUrl}`}
                  srcSet={`${item.thumbnailUrl}`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        )
      }
      {
        isFetchingPosts ? <Typography variant="h1" component="div">Loading...</Typography> : (
        <List sx={{ width: '100%',  bgcolor: 'background.paper' }}>
          {postData.map((item) => (
            <ListItem key={item.id} >
              <ListItemText
                primary={item.title}
                secondary={item.body}
              />
            </ListItem>
          ))}
        </List>
        )
      }
      {
        photoError && <Alert severity="error">{JSON.stringify(photoError)}</Alert>
      }
      {
        postError && <Alert severity="error">{JSON.stringify(postError)}</Alert>
      }
    </Stack>
   
  )
}

export default App
