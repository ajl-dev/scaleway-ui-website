import React, { Dispatch, SetStateAction } from 'react'
import styled from '@emotion/styled'
import Image from 'next/image'
import { Button, Col, Grid, Row, Switch, Icon, Breakpoint } from '@scaleway/ui'
import { useTheme } from '@emotion/react'
import { x } from '@xstyled/emotion'

const Header = styled(x.header)`
  min-height: 60px;
  height: 60px;
  top: 0;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 8px 2px rgba(178, 182, 195, 0.37);
  display: flex;
  align-items: center;
  min-width: 10px;
  padding: 8px 10px;
`

type TopBarProps = {
  isLightMode: boolean
  setIsLightMode: Dispatch<SetStateAction<boolean>>
}

const TopBar = ({ isLightMode, setIsLightMode }: TopBarProps): JSX.Element => {
  const theme = useTheme()
  return (
    <Header>
      <Grid>
        <Row>
          <Col display="flex" justifyContent="flex-start">
            <Image src={theme.logo} alt="logo" width={124} height={24} />
          </Col>
          <Col display="flex" justifyContent="flex-end">
            <Breakpoint up="medium">
              <Button name="github" variant="secondary" icon="github" />
              <Button
                name="documentation"
                to="https://react.ui.scaleway.com/"
                mx={2}
              >
                Documentation
              </Button>
            </Breakpoint>
            <Switch
              name="darkMode"
              size="small"
              width={54}
              checked={isLightMode}
              onChange={(event: { target: { checked: boolean } }) =>
                setIsLightMode(event.target.checked)
              }
              labeled
              onLabel={<Icon size={15} name="moon" />}
              offLabel={<Icon size={15} name="sun" />}
            />
          </Col>
        </Row>
      </Grid>
    </Header>
  )
}

export default TopBar
