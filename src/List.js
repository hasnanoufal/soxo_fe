import { Button, Card, Image, Space } from 'antd';
import React, { useEffect, useState } from 'react'
import './List.css'
import { useNavigate } from 'react-router';

function List() {
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(true)
  const navigate = useNavigate();

  const getData = async () => {
    const resp = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=coffee")
    const respJson = await resp.json();
    console.log("respJson", respJson);
    setData(respJson.drinks)
    setLoading(false)
  }
  useEffect(() => {
    console.log("useEffcer");
    getData()
  }, [])

  if (isLoading) {
    return <div>Loading........</div>
  }
  console.log({ data });
  const handleClick = (data) => {
    console.log("handleClick");
    navigate(`/coffee/${data.idDrink}`, { state: data })
  }
  return (
    <div className="coffee-grid margin">
      {data.map((details) => (
        <div key={details.idDrink}>
          <Space direction="vertical" size={16}>
            <Card size="small" title={details.strDrink} style={{ width: 300 }}>
              <div>
                <Image
                  width={200}
                  src={details.strDrinkThumb}
                />
                <p>{details.strInstructions}</p>
                <Button onClick={() => { handleClick(details) }}>View Details</Button>
              </div>
            </Card>
          </Space>
        </div>
      ))}
    </div>
  )
}

export default List