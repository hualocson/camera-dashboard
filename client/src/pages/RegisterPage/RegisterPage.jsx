import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { actionGetAllUsers } from 'store/actions';

import DataTable from 'components/DataTable/DataTable';

const tableHead = {
  username: 'Username', email: 'Email',
};

function RegisterPage() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.Users);

  const transformData = data.users.map(({ _id, username, email }) => ({ _id, username, email }));

  useEffect(() => {
    dispatch(actionGetAllUsers());
  }, []);

  return (
    <DataTable title="Đăng ký" data={transformData} tableHead={tableHead} loading={data.loading} />
  );
}

export default RegisterPage;
