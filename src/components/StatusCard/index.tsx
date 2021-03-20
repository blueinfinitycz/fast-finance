/* eslint-disable react/react-in-jsx-scope */
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import Qrcode from '../../assets/qrcode.svg';
import useGetJson from '../../hooks/useGetJson';
import { Loading } from '../index';
import { Card, CardBody, CardFooter, CardHeader, CardStatus, CardTitle, CloseButton, RequestRefund } from './cardElements';

interface IProps {
  url: string;
  onClick: () => void;
}

const StatusCard = ({ url, onClick }: IProps): JSX.Element => {
  const { jsonData, isLoading } = useGetJson(url);
  return (
    <>
      {isLoading.value && <Loading>... Loading</Loading>}
      <Card>
        <Container>
          <CardHeader>
            <Row>
              <Col md={10}>
                <CardTitle>Receive status</CardTitle>
              </Col>
              <Col md={2} style={{ textAlign: 'right' }}>
                <CloseButton onClick={onClick} />
              </Col>
            </Row>
          </CardHeader>
          {jsonData?.state.value === 1 && (
            <>
              <CardBody>
                <Row style={{ marginBottom: '30px' }}>
                  <Col md={6}>
                    <Row>
                      <p className="fieldName">Status</p>
                    </Row>
                    <Row>
                      <CardStatus className={jsonData.state.value === 1 ? 'success' : 'error'}>{jsonData.state.msg}</CardStatus>
                    </Row>
                  </Col>
                  <Col>
                    <Row>
                      <p className="fieldName">
                        Confirmations{' '}
                        <a href={`https://www.blockchain.com/ru/btc-testnet/address/${jsonData.obj.data.address}`} rel="noreferrer" target="_blank">
                          (View in Blockchain)
                        </a>
                      </p>
                    </Row>
                    <Row>
                      <CardStatus className="success">{jsonData.obj.data.confirmations_have}</CardStatus>
                    </Row>
                  </Col>
                </Row>
                <Row style={{ backgroundColor: 'rgba(228, 228, 228, 0.26)' }}>
                  <Col md={4}>
                    <a href={`${jsonData.obj.data.address}/${jsonData.obj.data.amount_in}`} rel="noreferrer" target="_blank">
                      <img src={Qrcode} width="186" height="186" alt="qrcode" />
                    </a>
                  </Col>
                  <Col md={8}>
                    <div className="flexContainer">
                      <Row>
                        <Col>
                          <p className="fieldName">Address</p>
                          <p className="address">{jsonData.obj.data.address}</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <p className="fieldName">Amount</p>
                          <p className="address">{`${jsonData.obj.data.amount_in.toFixed(jsonData.obj.data.precision_in)} ${jsonData.obj.data.currency_in}`}</p>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <Row>
                  <Col md={3}>
                    <Row>
                      <p className="fieldName">ID</p>
                    </Row>
                    <Row>
                      <p className="fieldName">Date</p>
                    </Row>
                    <Row>
                      <p className="fieldName">Amount in</p>
                    </Row>
                    <Row>
                      <p className="fieldName">Amount out</p>
                    </Row>
                    <Row>
                      <p className="fieldName">Convertion rate</p>
                    </Row>
                  </Col>
                  <Col md={3}>
                    <Row>
                      <p className="paragraph">{jsonData.obj.data.id}</p>
                    </Row>
                    <Row>
                      <p className="paragraph">{jsonData.obj.data.created_at}</p>
                    </Row>
                    <Row>
                      <p className="paragraph">{`${jsonData.obj.data.amount_in.toFixed(jsonData.obj.data.precision_in)} ${jsonData.obj.data.currency_in}`}</p>
                    </Row>
                    <Row>
                      <p className="paragraph">{`${jsonData.obj.data.currency_out} ${jsonData.obj.data.amount_out.toFixed(jsonData.obj.data.precision_out)}`}</p>
                    </Row>
                    <Row>
                      <p className="paragraph">
                        1{jsonData.obj.data.currency_in}={`${jsonData.obj.data.currency_out} ${jsonData.obj.data.rate.toFixed(jsonData.obj.data.rate_precision)}`}
                      </p>
                    </Row>
                  </Col>
                  <Col md={6}>
                    <Row style={{ justifyContent: 'flex-end' }}>
                      {jsonData.obj.data.can_refund === 1 && <RequestRefund onClick={() => console.log('REQUEST')}>Request Refund</RequestRefund>}
                    </Row>
                  </Col>
                </Row>
              </CardFooter>
            </>
          )}
        </Container>
      </Card>
    </>
  );
};

export default StatusCard;
