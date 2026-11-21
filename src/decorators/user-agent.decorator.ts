import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import DeviceDetector = require('device-detector-js');

export const Agent = createParamDecorator((data, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();
  const userAgentString = request.headers['user-agent'];
  const deviceDet = new DeviceDetector();
  const agentData = deviceDet.parse(userAgentString);

  const device = agentData?.device?.type.toString();
  const os = agentData?.os?.name.toString();
  const osVersion = agentData?.os?.version.toString();
  const browser = agentData?.client?.name.toString();
  const browserVersion = agentData?.client?.version.toString();

  // console.log(
  //   device,
  //   os,
  //   browser,
  //   Number(osVersion || 0),
  //   Number(browserVersion || 0),
  //   agentData,
  //   'agent Data',
  // );

  // Use the device, os, and browser variables as needed
  return {
    device: device ? device : 'desktop',
    os,
    osVersion: Number(osVersion || 0),
    browser,
    browserVersion: Number(browserVersion || 0),
  };
});
