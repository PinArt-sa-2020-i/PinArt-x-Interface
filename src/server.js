module.exports = {
    //Data ms of LabelsAPI
    labels_url:process.env.LABELS_URL || 'ec2-52-20-104-224.compute-1.amazonaws.com',
    labels_port:process.env.LABELS_PORT || '8080',
    labels_entryPoint:process.env.LABELS_ENTRY || 'label/',

    //Data ms of MultimediaFeedAPI
    feed_url: process.env.FEED_URL || 'ec2-3-209-34-155.compute-1.amazonaws.com',
    feed_port: process.env.FEED_PORT || '3001',
    feed_entryPoint: process.env.FEED_ENTRY || '',

    //Data ms of ProfileAPI
    profile_url: process.env.PROFILE_URL || "3.227.65.124",
    profile_port: process.env.PROFILE_PORT || "8080",
    profile_entryPoint: process.env.PROFILE_ENTRY || "api/",

    //Data service of 2a
    ss_2a_url: process.env.SS_2A_URL || "localhost",
    ss_2a_port: process.env.SS_2A_PORT || "6060",
    ss_2a_action: process.env.SS_2A_ACTION || "ss_2b",


    //Data server rest
    rest_server_port: process.env.REST_SERVER_PORT || "9000",


    //Data server sopa
    soap_server_port: process.env.SOAP_SERVER_PORT || "6060"
};