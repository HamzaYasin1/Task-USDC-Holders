import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getAccountHolders } from '../api/account';
import { errorMessage, toastMessageFailure } from '../utils/utils';
import { Container } from 'reactstrap';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { loader } from '../utils/utils';
import { isEmpty } from 'lodash'

function Main() {
    const [isLoading, setIsLoading] = useState(false);
    const [accountHolders, setAccountHolders] = useState([]);

    const columns = [
        { dataField: 'address', text: 'Address' },
        { dataField: 'balance', text: 'Balance' },
    ];

    // Pagination options
    const paginationOptions = {
        sizePerPage: 15,
        hideSizePerPage: true,
        hidePageListOnlyOnePage: true,
    };

    useEffect(() => {
        // Fetch account holders data
        const fetchAccountHolders = async () => {
            try {
                setIsLoading(true);
                const { data } = await getAccountHolders();
                setAccountHolders(data.data);
                setIsLoading(false);
            } catch (e) {
                setIsLoading(false);
                const error = errorMessage(e);
                console.log('errorMessage', error);
                toastMessageFailure(error);
            }
        };

        fetchAccountHolders();
    }, []);

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                width: '100%',
                padding: '30px',
            }}
        >
            <h4>Account Holders USDC</h4>

            {isLoading ? (
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    {loader('Loading account holders.')}
                </div>
            ) : (
                <>
                    {!isEmpty(accountHolders) && (
                        <Container>
                            <BootstrapTable
                                keyField="_id"
                                data={accountHolders.map((item) => ({
                                    ...item,
                                    balance: item.balance / 1e6, // Divide the balance field by 1e6
                                }))}
                                columns={columns}
                                pagination={paginationFactory(paginationOptions)}
                            />
                        </Container>
                    )}
                </>
            )}

            {isLoading === false && accountHolders.length === 0 && (
                <div style={{ textAlign: 'center' }}>
                    <h4 className="mt-4">There are no existing account holders at the moment</h4>
                </div>
            )}
        </div>
    );
}

export default Main;
