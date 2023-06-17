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
      <CardHeader title="Fees" />
      <Divider />
      <List disablePadding>
      <ListItem
          sx={{
            py: 1.8
          }}
        >
          <ListItemAvatar>
            <AvatarWrapperWarning>
              <Payments />
            </AvatarWrapperWarning>
          </ListItemAvatar>
          <ListItemText
            primary={<Text color="black">17 Pending Payment</Text>}
            primaryTypographyProps={{
              variant: 'body1',
              fontWeight: 'bold',
              color: 'textPrimary',
              gutterBottom: true,
              noWrap: true
            }}
            secondary={<Text color="warning">Not completed</Text>}
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
            py: 1.8
          }}
        >
          <ListItemAvatar>
            <AvatarWrapperSuccess>
              <PriceCheck />
            </AvatarWrapperSuccess>
          </ListItemAvatar>
          <ListItemText
            primary={<Text color="black">25 Paid</Text>}
            primaryTypographyProps={{
              variant: 'body1',
              fontWeight: 'bold',
              color: 'textPrimary',
              gutterBottom: true,
              noWrap: true
            }}
            secondary={<Text color="success">Completed</Text>}
            secondaryTypographyProps={{ variant: 'body2', noWrap: true }}
          />
          {/* <Switch
            edge="end"
            color="primary"
            onChange={handleToggle('phone_verification')}
            checked={checked.indexOf('phone_verification') !== -1}
          /> */}
        </ListItem>
        
      </List>
    </Card>
    <Card>
      <CardHeader title="Case" />
      <Divider />
      <List disablePadding>
      <ListItem
          sx={{
            py: 1.8
          }}
        >
          <ListItemAvatar>
            <AvatarWrapperWarning>
              <PendingActions />
            </AvatarWrapperWarning>
          </ListItemAvatar>
          <ListItemText
            primary={<Text color="black">20 Pending Case</Text>}
            primaryTypographyProps={{
              variant: 'body1',
              fontWeight: 'bold',
              color: 'textPrimary',
              gutterBottom: true,
              noWrap: true
            }}
            secondary={<Text color="warning">Not completed</Text>}
            secondaryTypographyProps={{ variant: 'body2', noWrap: true }}
          />
          
        </ListItem>
        
        <Divider />
        <ListItem
          sx={{
            py: 1.8
          }}
        >
          <ListItemAvatar>
            <AvatarWrapperSuccess>
              <DoneAll />
            </AvatarWrapperSuccess>
          </ListItemAvatar>
          <ListItemText
            primary={<Text color="black">50 Finished Case</Text>}
            primaryTypographyProps={{
              variant: 'body1',
              fontWeight: 'bold',
              color: 'textPrimary',
              gutterBottom: true,
              noWrap: true
            }}
            secondary={<Text color="success">Completed</Text>}
            secondaryTypographyProps={{ variant: 'body2', noWrap: true }}
          />
          
        </ListItem>
        
      </List>
    </Card>
    </Box>
    
  );
}

export default SideInfo;
