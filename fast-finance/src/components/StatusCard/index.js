import React, {useState} from 'react'
import {Card, CardHeader, CardTitle, CardBody, CardFooter, CloseButton, CardStatus, RequestRefund} from '../../components/StatusCard/cardElements';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap'
import Qrcode from '../../assets/qrcode.svg'
import useGetJson from '../../hooks/useGetJson'

const StatusCard = () => {
    // const [obj,setObj] = useState(
    //     {
    //       obj:
    //         {
    //           address:'',
    //           confirmations_have:'',
    //           amount_in: '',
    //           amount_out: '',
    //           currency_in:'',
    //           currency_out: '',
    //           precision_in:'',
    //           precision_out:'',
    //           timeout: '',
    //           created_at: '',
    //           rate: '',
    //           rate_precision: '',
    //           can_refund: '',
    //         },
    //       status:
    //         {
    //           value:null,
    //           msg: ''
    //         }
    //     });

    const {data} = useGetJson("https://dev.client.ff-testing.com/v1/orders/770")
    console.log("data: ",data)

    return (
        data &&
        <Card>
            <Container>
                <CardHeader>
                    <Row>
                        <Col md={10}>
                            <CardTitle>Receive status</CardTitle>
                        </Col>
                        <Col md={2} style={{ textAlign: 'right' }}>
                            <CloseButton />
                        </Col>
                    </Row>
                </CardHeader>
                {data.status.value === 1 &&
                    <>
                        <CardBody>
                            <Row style={{ marginBottom: '30px' }}>
                                <Col md={6}>
                                    <Row>
                                        <p className="fieldName">Status</p>
                                    </Row>
                                    <Row>
                                        <CardStatus className={data.status.value === 1 ? 'success' : 'error'}>{data.status.msg}</CardStatus>
                                    </Row>
                                </Col>
                                <Col>
                                    <Row>
                                        <p className="fieldName">Confirmations <a href={`https://www.blockchain.com/ru/btc-testnet/address/${data.obj.address}`} target="_blank">(View in Blockchain)</a></p>
                                    </Row>
                                    <Row>
                                        <CardStatus className="success">{data.obj.confirmations_have}</CardStatus>
                                    </Row>
                                </Col>
                            </Row>
                            <Row style={{ backgroundColor: 'rgba(228, 228, 228, 0.26)' }}>
                                <Col md={4}>
                                    <a href={`${data.obj.address}/${data.obj.amount_in}`} target="_blank"><img src={Qrcode} width="186" height="186" /></a>
                                </Col>
                                <Col md={8}>
                                    <div className="flexContainer">
                                        <Row>
                                            <Col>
                                                <p className="fieldName">Address</p>
                                                <p className="address">{data.obj.address}</p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <p className="fieldName">Amount</p>
                                                <p className="address">
                                                    {`${data.obj.amount_in.toFixed(data.obj.precision_in)} ${data.obj.currency_in}`}
                                                </p>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        </CardBody>
                        <CardFooter>
                            <Row>
                                <Col md={3}>
                                    <Row><p className="fieldName">ID</p></Row>
                                    <Row><p className="fieldName">Date</p></Row>
                                    <Row><p className="fieldName">Amount in</p></Row>
                                    <Row><p className="fieldName">Amount out</p></Row>
                                    <Row><p className="fieldName">Convertion rate</p></Row>
                                </Col>
                                <Col md={3}>
                                    <Row><p className="paragraph">{data.obj.id}</p></Row>
                                    <Row><p className="paragraph">{data.obj.created_at}</p></Row>
                                    <Row><p className="paragraph">{data.obj.amount_in.toFixed(data.obj.precision_in) + " " + data.obj.currency_in}</p></Row>
                                    <Row><p className="paragraph">{data.obj.currency_out + " " + data.obj.amount_out.toFixed(data.obj.precision_out)}</p></Row>
                                    <Row><p className="paragraph">1{data.obj.currency_in}={data.obj.currency_out + " " + data.obj.rate.toFixed(data.obj.rate_precision)}</p></Row>
                                </Col>
                                <Col md={6}>
                                    <Row style={{ justifyContent: 'flex-end' }}>
                                        {data.obj.can_refund === 1 && <RequestRefund onClick={() => console.log('REQUEST')}>Request Refund</RequestRefund>}
                                    </Row>
                                </Col>
                            </Row>
                        </CardFooter>
                    </>
                }
            </Container>
        </Card>
    )
}

export default StatusCard;