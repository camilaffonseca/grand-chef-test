import Head from 'next/head'
import { Line, Pie } from 'react-chartjs-2'

import styled, { th } from '@xstyled/styled-components'

import Div from 'components/atoms/Div'
import Text from 'components/atoms/Text'
import Card from 'components/molecules/Card'
import DatePicker from 'components/molecules/DatePicker'
import Search from 'components/molecules/Search'
import Select from 'components/molecules/Select'
import DetailsCard from 'components/organisms/DetailsCard'
import MainHeader from 'components/organisms/MainHeader'
import ProductSection from 'components/templates/ProductSection'

const selectOptions = [
  {
    value: 'porcentagem',
    label: 'Porcentagem',
  },
  {
    value: 'uma-opção',
    label: 'Uma Opção :)',
  },
  {
    value: 'outra-opção',
    label: 'Outra Opção :D',
  },
  {
    value: 'oooutra-opção',
    label: 'Oooutra Opção :p',
  },
  {
    value: 'mais-uma',
    label: 'E mais uma ^^',
  },
]

const dropdownOptions = [
  {
    value: 'uuuma-opção',
    label: 'Uuuma Opção (:',
  },
  {
    value: 'oooutra-opção',
    label: 'Oooutra Opção :)',
  },
]

const productsOptions = [
  {
    id: 1,
    name: 'Coca-Cola 350mL',
    quantity: 35,
    price: 3.58,
    promotion: 2.29,
    spots: 150,
    rescue: 33,
    color: '#EF6C00',
  },
  {
    id: 2,
    name: 'X-Burguer',
    quantity: 55,
    price: 42.35,
    promotion: 40.99,
    spots: 120,
    color: '#F5A15C',
  },
  {
    id: 3,
    name: 'Espeto de Carne',
    quantity: 80,
    price: 4.5,
    promotion: 3.99,
    color: '#F7B985',
  },
]

const LineChartData = {
  labels: ['Abr 3', 'Abr 4', 'Abr 5', 'Abr 6', 'Abr 7', 'Abr 8', 'Abr 9'],
  datasets: [
    {
      data: [100, 200, 150, 200, 300, 200, 400],
      borderColor: '#F57C00',
      tension: 0.1,
    },
  ],
}

const PieChartData = {
  labels: [
    'Promoção de Terça-feira (R$ 150,00)',
    'Promoção de Segunda-feira (R$ 150,00)',
    'Taxa de entrega grátis (R$ 300,00)',
  ],
  datasets: [
    {
      data: [45, 45, 270],
      backgroundColor: ['#F28933', '#8F4100', '#EF6C00'],
      tension: 0.1,
    },
  ],
}

const DetailsCardCustomBg = styled(DetailsCard)`
  background: linear-gradient(
    180deg,
    ${th.color('orangePrimary75')} 0%,
    ${th.color('orangePrimary')} 100%
  );

  p,
  i {
    color: white87;
  }
`

const Home = () => (
  <div>
    <Head>
      <title>GrandChef Test</title>
      <meta name='description' content='GrandChef front-end test' />
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <main>
      <MainHeader title='Desempenho de Promoções' />
      <Div
        px={{ xs: '1.6rem', md: '7.8rem', lg: '7.2rem' }}
        py='2.5rem'
        h={{ xs: '100%', lg: 'calc(100vh - 5.6rem)' }}
        flexDirection='column'
        gap='2.4rem'
        overflowY={{ xs: 'auto', lg: 'hidden' }}
      >
        <Div justifyContent={{ md: 'space-between' }} gap='1.6rem' flexWrap='wrap'>
          <Search placeholder='Procurar um cliente' w={{ xs: '100%', md: '25.5rem' }} />
          <Div w={{ xs: '100%', md: 'fit-content' }} gap='1.6rem'>
            <Div w={{ xs: '100%', md: '50%' }}>
              <Select
                w='100%'
                onChange={() => {}}
                title='Tipo'
                defaultValue={selectOptions[0]}
                options={selectOptions}
              />
            </Div>
            <Div w={{ xs: '100%', md: '50%' }}>
              <DatePicker w='100%' />
            </Div>
          </Div>
        </Div>
        <Div gap='2.4rem' flexDirection={{ xs: 'column', lg: 'row' }} w='100%' h='100%'>
          <Div
            gap='1.6rem'
            flexDirection='column'
            h='100%'
            w={{ md: '100%', lg: 'calc(100% - 322px - 2.4rem)' }}
          >
            <Div gap='2.4rem' display='flex' flexDirection={{ xs: 'column', md: 'row' }}>
              <DetailsCardCustomBg
                iconName='show_chart'
                title='Faturamento'
                text='R$ 300,00'
              />
              <DetailsCard iconName='group' title='Participantes' text='100 clientes' />
            </Div>
            <Div display='table' h='100%'>
              <Div display='table-row' h='57.7%'>
                <Card h='100%' flexDirection='column'>
                  <Div px='1.6rem' py='0.7rem'>
                    <Text>Faturamento diário</Text>
                  </Div>
                  <Div w='100%' h='100%'>
                    <Div position='relative' w='100%' h='100%'>
                      <Line
                        options={{
                          maintainAspectRatio: false,
                          responsive: true,
                          plugins: {
                            legend: {
                              display: false,
                            },
                            tooltip: {
                              backgroundColor: '#F57C00',
                            },
                          },
                          locale: 'pt-BR',
                        }}
                        data={LineChartData}
                      />
                    </Div>
                  </Div>
                </Card>
              </Div>
              <Div display='table-row' h='1.6rem' />
              <Div display='table-row' h='auto'>
                <Card h='100%' flexDirection='column'>
                  <Div px='1.6rem' py='0.7rem'>
                    <Text>Promoções mais utilizadas</Text>
                  </Div>
                  <Div position='relative' w='70%' h='80%' pb='1.6rem'>
                    <Pie
                      options={{
                        maintainAspectRatio: false,
                        responsive: true,
                        plugins: {
                          legend: {
                            display: true,
                            position: 'right',
                          },
                          tooltip: {
                            backgroundColor: '#F57C00',
                          },
                        },
                        locale: 'pt-BR',
                        borderWidth: 0,
                      }}
                      data={PieChartData}
                    />
                  </Div>
                </Card>
              </Div>
            </Div>
          </Div>
          <Div display='table' h={{ xs: '520px', lg: '100%' }}>
            <Div display='table-row' h='72.7%'>
              <ProductSection
                products={productsOptions}
                selectTitle='Mais Vendidos'
                selectOptions={dropdownOptions}
              />
            </Div>
            <Div display='table-row' h='1.6rem' />
            <Div display='table-row' h='auto'>
              <Card
                h={{ xs: '180px', lg: '100%' }}
                padding='1.6rem'
                flexDirection='column'
              >
                <Div
                  alignItems='center'
                  justifyContent='space-between'
                  w='100%'
                  h='2.4rem'
                  mb='1.6rem'
                >
                  <Text>Serviços</Text>
                  <Select
                    dropdown
                    onChange={() => {}}
                    title='Mais Utilizados'
                    options={dropdownOptions}
                  />
                </Div>
                <Div
                  flexDirection='column'
                  borderWidth='1px'
                  borderColor='black12'
                  borderRadius='4px'
                  padding='0.8rem'
                >
                  <Text fontSize='1rem' lineHeight='1.6rem' color='black87'>
                    Permite cobrar taxa de entrega de perdidos
                  </Text>
                  <Text fontSize='1rem' lineHeight='1.6rem' color='black60'>
                    Quantidade: 33 - R$ 20,00 em média
                  </Text>
                </Div>
              </Card>
            </Div>
          </Div>
        </Div>
      </Div>
    </main>
  </div>
)

export default Home
