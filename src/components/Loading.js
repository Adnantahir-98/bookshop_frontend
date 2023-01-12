import CircleLoader from 'react-spinners/CircleLoader'


const Loading = ({loading}) => {
  return (
    <center style={{marginTop: "250px"}}>
      <CircleLoader
        size={75}
        color={'#FF0000'}
        loading={loading}
      />
    </center>
  )
}

export default Loading
