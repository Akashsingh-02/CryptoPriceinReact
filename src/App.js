import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import Coin from './Coin.js'

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


function App() {
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    const asdf = async () => {
      await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        .then(res => {
          setCoins(res.data)
          console.log(res.data)
        }).catch(error => console.log(error))
    }
    asdf();
    console.log(coins)
  });

  // console.log(coins)
  const handleChange = e => {
    setSearch(e.target.value)
  }

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    // <div>hello</div>
    <div className="coin-app">
      <h3>Analysis of Crypto-Coin Value</h3>
      <div className="coin-search">
        <form action="">
          <input type="text" className="coin-input" placeholder="Search with the coin name" onChange={handleChange} />
        </form>
      </div>

      {/* <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Coins</StyledTableCell>
              <StyledTableCell align="right">Coin Name</StyledTableCell>
              <StyledTableCell align="right">Value</StyledTableCell>
              <StyledTableCell align="right">Percentage Change</StyledTableCell>
              <StyledTableCell align="right">Market Value</StyledTableCell>
            </TableRow>
          </TableHead>
          </Table>
          </TableContainer> */}
            {filteredCoins.map(coin=>{
              return(
                <Coin
                  key={coin.id}
                  name={coin.name}
                  image={coin.image}
                  symbol={coin.symbol}
                  marketcap={coin.market_cap}
                  price={coin.current_price}
                  pricechange={coin.price_change_percentage_24h} />
      );
    })}
    </div>
  );
}

export default App;
