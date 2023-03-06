/** @jsxImportSource @emotion/react */
import React, { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

import DummyAppliData from '../../../libs/Const/DummyAppliData';


const columns = [
  { id: 'increment', label: 'No', width: '53px' },
  { id: 'name', label: '名前', width: '175px' },
  { id: 'appli_id', label: '応募者ID', width: '158px' },
  { id: 'birthday', label: '生年月日', width: '175px' },
  { id: 'gender', label: '性別', width: '70px' },
  { id: 'appli_media', label: 'スタッフコード', width: '158px' },
  { id: 'prefecture', label: '都道府県', width: '175px' },
  { id: 'branch', label: '担当支店', width: '175px' },
  { id: 'tel1', label: '電話番号', width: '262px' },
  { id: 'mail_address1', label: 'メールアドレス', width: '262px' },
  { id: 'detail', label: '詳細', width: '96px' },
];

const styles = {
  header:{
    fontWeight: 'bold',
    color: '#0047a4',
    textAlign: 'center',
  },
  data:{
    color: '#0047a4',
  },
  ruby:{
    fontSize: '0.5rem',
  },
  fontSmall:{
    fontSize: '0.8rem',
  },
  link:{
    color: '#FFFFFF'
  }
}

//ダミーの応募者データを生成
const rows = DummyAppliData();

function ApplicantsList(){
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(50);

  //ページネーション
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  //表示件数切替
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const element = useRef(null);
  const [scrollDistance, setScrollDistance] = useState(0);

  
  useEffect(() => {
    const handleScrollCalcDistance = () => {

      const distanceFromTop = element.current;
      const { left, top, right, bottom } = distanceFromTop.getBoundingClientRect();

      setScrollDistance({ left, top, right, bottom });
    };
    
    window.addEventListener('scroll', handleScrollCalcDistance);
    


    return () => {
      window.removeEventListener('scroll', handleScrollCalcDistance);
    };
  }, []);

  const fixedStyles = {
    position: 'initial',
    top: 'initial',

  };

  const [dynamicStyles, setDynamicStyles] = useState(fixedStyles);

  useEffect(() => {
    const handleScrollChangeStyle = () => {
      if (scrollDistance.top <= 64) {
        setDynamicStyles({
          ...styles,
          position: 'fixed',
          top: '2.5rem',
          left: '0',
          right: '0',
          margin: '0 80px',
          zIndex: '20',
          padding: '0'


          // 他のCSSプロパティを変更できます
        });
      } else {
        setDynamicStyles(fixedStyles);
      }
    };
    
    window.addEventListener('scroll', handleScrollChangeStyle);

    return () => {
      window.removeEventListener('scroll', handleScrollChangeStyle);
    };
  }, [scrollDistance.top]);

  return (
    
    <Paper sx={{ width: '100%', overflow: 'auto' }}>
      <TableContainer sx={{}}>
        <Table ref={element}>
          <TableHead style={dynamicStyles} sx={{ background: '#FFFFFF',}}>

              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ width: column.width }}
                  css={ styles.header }
                >
                  {column.label}
                </TableCell>
              ))}

          </TableHead>
          <TableBody>
          {rows
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row, k) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  <TableCell sx={{ width: '3%' }}>{k + 1 +  page * rowsPerPage}</TableCell>
                  <TableCell css={styles.data} sx={{ width: '10%' }}>
                    <p css={styles.ruby}>{row.name_kana}</p>
                    <p>{row.name_kanji}</p>
                  </TableCell>
                  <TableCell css={styles.data} sx={{ width: '9%' }}>{row.appli_id}</TableCell>
                  <TableCell css={styles.data} sx={{ width: '10%' }}>
                    <p>{row.birthday}</p>
                    <p>{row.age}</p>
                    </TableCell>
                  <TableCell css={styles.data} sx={{ width: '4%' }}>{row.gender}</TableCell>
                  <TableCell css={styles.data} sx={{ width: '9%' }}>
                    <Link to={`/oubo_detail/` + row.appli_id}>{row.staffcode}</Link>
                  </TableCell>

                  <TableCell css={styles.data} sx={{ width: '10%' }}>{row.prefecture}</TableCell>
                  <TableCell css={styles.data} sx={{ width: '10%' }}>{row.branch}</TableCell>
                  <TableCell css={styles.data} sx={{ width: '15%' }}>
                    <p>{row.tel1}</p>
                    <p>{row.tel2}</p>
                  </TableCell>
                  <TableCell css={styles.data} sx={{ width: '15%' }}>
                    <p>{row.mail_address1}</p>
                    <p>{row.mail_address2}</p>
                  </TableCell>
                  <TableCell sx={{ textAlign: 'center', width: '5%' }}>
                    <Button variant="contained" size="small"><Link to={`/oubo_detail/` + row.appli_id} css={styles.link}>詳細</Link></Button>
                  </TableCell>
                </TableRow>
                );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[50, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}



export default ApplicantsList;