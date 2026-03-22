const voiceNotifications = {
  teammateConnected: true,
  teammateDisconnected: true,
  teammateJoinedTeam: true,
  teammateLeftTeam: true,
  teammateDied: true,
  trackerConnected: true,
  trackerDisconnected: true,
  serverWentOnline: true,
  serverWentOffline: true,
  serverWiped: true,
  smartAlarmNotifications: true,
  smartDevicesNoLongerDetected: true
};

const commands = {
  say: {
    description: 'Make the bot speak a custom message through voice notifications',
    usage: '!say <message>',
    callback: (message) => {
      // Implement voice notification logic here
      console.log(`Bot says: ${message}`);
    }
  }
};