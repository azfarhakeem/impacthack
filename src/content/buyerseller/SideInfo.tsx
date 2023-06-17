import { useState } from 'react';
import {
  Card,
  CardHeader,
  ListItemText,
  List,
  ListItem,
  Divider,
  Switch,
  ListItemAvatar,
  Avatar,
  styled,
  Typography,
  Box
} from '@mui/material';
import LockTwoToneIcon from '@mui/icons-material/LockTwoTone';
import PhoneLockedTwoToneIcon from '@mui/icons-material/PhoneLockedTwoTone';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import Text from 'src/components/Text';
import { DoneAll, Payments, PendingActions, PriceCheck } from '@mui/icons-material';

const AvatarWrapperError = styled(Avatar)(
  ({ theme }) => `
      background-color: ${theme.colors.error.lighter};
      color:  ${theme.colors.error.main};
`
);

const AvatarWrapperSuccess = styled(Avatar)(
  ({ theme }) => `
      background-color: ${theme.colors.success.lighter};
      color:  ${theme.colors.success.main};
`
);

const AvatarWrapperWarning = styled(Avatar)(
  ({ theme }) => `
      background-color: ${theme.colors.warning.lighter};
      color:  ${theme.colors.warning.main};
`
);



function SideInfo() {
  const [checked, setChecked] = useState(['phone_verification']);

  const handleToggle = (value: string) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <Box  sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <Card>
      <CardHeader title="Payment Schedule" />
      <Divider />
      <List disablePadding>
      <ListItem
          sx={{
            py: 1.7
          }}
        >
          <ListItemAvatar>
            <AvatarWrapperSuccess>
              <PriceCheck />
            </AvatarWrapperSuccess>
          </ListItemAvatar>
          <ListItemText
            primary={<Text color="black">1st Phase - RM10,000</Text>}
            primaryTypographyProps={{
              variant: 'body1',
              fontWeight: 'bold',
              color: 'textPrimary',
              gutterBottom: true,
              noWrap: true
            }}
            secondary={<Text color="success">12 January, Completed</Text>}
            secondaryTypographyProps={{ variant: 'body2', noWrap: true }}
          />
          {/* <Switch
            edge="end"
            color="primary"
            onChange={handleToggle('phone_verification')}
            checked={checked.indexOf('phone_verification') !== -1}
          /> */}
        </ListItem>
        
        <Divider />
        <ListItem
          sx={{
            py: 1.7
          }}
        >
          <ListItemAvatar>
            <AvatarWrapperWarning>
              <Payments />
            </AvatarWrapperWarning>
          </ListItemAvatar>
          <ListItemText
            primary={<Text color="black">2nd Phase - RM30,000</Text>}
            primaryTypographyProps={{
              variant: 'body1',
              fontWeight: 'bold',
              color: 'textPrimary',
              gutterBottom: true,
              noWrap: true
            }}
            secondary={<Text color="warning">20 February, Pending</Text>}
            secondaryTypographyProps={{ variant: 'body2', noWrap: true }}
          />
          {/* <Typography variant="subtitle2" gutterBottom noWrap>
            10
            </Typography> */}
          {/* <Switch
            edge="end"
            color="primary"
            onChange={handleToggle('recovery_email')}
            checked={checked.indexOf('recovery_email') !== -1}
          /> */}
        </ListItem>
        <Divider />
        <ListItem
          sx={{
            py: 1.7
          }}
        >
          <ListItemAvatar>
            <AvatarWrapperWarning>
              <Payments />
            </AvatarWrapperWarning>
          </ListItemAvatar>
          <ListItemText
            primary={<Text color="black">3rd Phase - RM35,000</Text>}
            primaryTypographyProps={{
              variant: 'body1',
              fontWeight: 'bold',
              color: 'textPrimary',
              gutterBottom: true,
              noWrap: true
            }}
            secondary={<Text color="warning">15 March, Pending</Text>}
            secondaryTypographyProps={{ variant: 'body2', noWrap: true }}
          />
          {/* <Typography variant="subtitle2" gutterBottom noWrap>
            10
            </Typography> */}
          {/* <Switch
            edge="end"
            color="primary"
            onChange={handleToggle('recovery_email')}
            checked={checked.indexOf('recovery_email') !== -1}
          /> */}
        </ListItem>
        <Divider />
        <ListItem
          sx={{
            py: 1.7
          }}
        >
          <ListItemAvatar>
            <AvatarWrapperWarning>
              <Payments />
            </AvatarWrapperWarning>
          </ListItemAvatar>
          <ListItemText
            primary={<Text color="black">4th Phase - RM40,000</Text>}
            primaryTypographyProps={{
              variant: 'body1',
              fontWeight: 'bold',
              color: 'textPrimary',
              gutterBottom: true,
              noWrap: true
            }}
            secondary={<Text color="warning">18 April, Pending</Text>}
            secondaryTypographyProps={{ variant: 'body2', noWrap: true }}
          />
          {/* <Typography variant="subtitle2" gutterBottom noWrap>
            10
            </Typography> */}
          {/* <Switch
            edge="end"
            color="primary"
            onChange={handleToggle('recovery_email')}
            checked={checked.indexOf('recovery_email') !== -1}
          /> */}
        </ListItem>
        <Divider />
        <ListItem
          sx={{
            py: 1.7
          }}
        >
          <ListItemAvatar>
            <AvatarWrapperWarning>
              <Payments />
            </AvatarWrapperWarning>
          </ListItemAvatar>
          <ListItemText
            primary={<Text color="black">5th Phase - RM35,000</Text>}
            primaryTypographyProps={{
              variant: 'body1',
              fontWeight: 'bold',
              color: 'textPrimary',
              gutterBottom: true,
              noWrap: true
            }}
            secondary={<Text color="warning">5 May, Pending</Text>}
            secondaryTypographyProps={{ variant: 'body2', noWrap: true }}
          />
          {/* <Typography variant="subtitle2" gutterBottom noWrap>
            10
            </Typography> */}
          {/* <Switch
            edge="end"
            color="primary"
            onChange={handleToggle('recovery_email')}
            checked={checked.indexOf('recovery_email') !== -1}
          /> */}
        </ListItem>
        
      </List>
    </Card>
    
    </Box>
    
  );
}

export default SideInfo;
