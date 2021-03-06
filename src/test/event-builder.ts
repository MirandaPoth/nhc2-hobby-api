import { Event } from '../event/event';
import { Method } from '../command/method';

export const BRIGHTNESS_CHANGED_EVENT: Event = {
  Method: Method.DEVICES_STATUS,
  Params: [
    {
      Devices: [
        {
          Properties: [{ Brightness: '34' }],
          Uuid: '25ee33e3-5b9c-4171-8ede-7e94f1cb6b33',
        },
      ],
    },
  ],
};

export const STATUS_CHANGED_EVENT: Event = {
  Method: Method.DEVICES_STATUS,
  Params: [
    {
      Devices: [
        {
          Properties: [{ Status: 'On' }],
          Uuid: '25ee33e3-5b9c-4171-8ede-7e94f1cb6b33',
        },
      ],
    },
  ],
};

export const LIST_DEVICS_EVENT: Event = {
  Method: Method.DEVICES_LIST,
  Params: [
    {
      Devices: [
        {
          Name: 'gatewayfw',
          Uuid: 'ad8d61b7-b020-4a0b-b82a-c4bfbf5fbaf1',
          Model: 'generic',
          Type: 'gatewayfw',
        },
        {
          Properties: [{ Status: 'Off' }],
          Name: 'Light 1',
          Uuid: '488d61fa-de6c-4b1c-a832-f1971dc12110',
          Model: 'light',
          Type: 'action',
        },
        {
          Name: 'Dimmer 1',
          Uuid: '41ce667a-df18-4d4b-83d5-f686cc6119fe',
          Model: 'dimmer',
          Type: 'dimmer',
        },
        {
          Properties: [{ Brightness: '100' }, { Status: 'Off' }],
          Name: 'Dimmer 1',
          Uuid: 'abd4b98b-f197-42ed-a51a-1681b9176228',
          Model: 'dimmer',
          Type: 'action',
        },
      ],
    },
  ],
};

export const buildEvent = (event: Event) => ({
  topic: 'hobby/control/devices/evt',
  payload: JSON.stringify(event),
  qos: 0,
  retain: false,
});
