const Style = theme => ({
  Card: {
    width: '100%',
    //   display: 'flex',
    //   flexWrap: 'wrap',
    boxSizing: 'border-box',
    //   maxWidth: '55%',
    //   margin: 'auto',
    marginTop: 12,
    display: 'flex',
    justifyContent: 'center'
    // backgroundColor: '#bf27a6'
  },
  ListCard: {
    marginLeft: 12,
    marginTop: 12,
    maxWidth: 448,
    position: 'static'
  },
  CardMedia: {
    width: 95,
    height: 80,
    borderRadius: 4
  },
  CardContent: {
    width: 35
  },
  bottomBox: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    bottom: 0,
    borderTop: '1px solid #DFE4E9',
    position: 'fixed',
    maxWidth: 387,
    margin: 'auto'
  },
  gridItemRight: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  gridItemTop: {
    marginTop: 15,
    paddingRight: 10,
    paddingLeft: 10
  },
  total: {
    color: '#4E5356',
    fontSize: '0.875rem',
    lineHeight: '15px',
    fontFamily: 'Montserrat, sans-serif'
  },
  price: {
    color: '#14181B',
    fontSize: '0.875rem',
    fontWeight: 'bold'
  },
  icon: {
    color: '#9FA3A6'
  },
  info: {
    color: '#9FA3A6',
    fontSize: '11px'
  },
  gridItemInfo: {
    marginTop: 5,
    marginBottom: 10,
    paddingRight: 10,
    paddingLeft: 10
  },
  itemRIght: {
    color: '#4E5356',
    fontSize: '10px',
    fontFamily: 'Montserrat, sans-serif'
  },
  market: {
    color: '#14181B',
    fontSize: '12px',
    fontWeight: 'bold'
  },
  button: {
    // backgroundColor: '#F15B5D',
    color: '#FFFFFF',
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 'bold',
    fontSize: '14px',
    width: '100%',
    borderRadius: '5px'
  },
  buttonBox: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingTop: 5
  }
});
export default Style;
