
const appNexusClickTracker = "${CLICK_URL}";

NINEAU_Loader.setup();
NINEAU_Config.setOmnitureSuiteId('mi9studiosglobal');
NINEAU_Config.setCategory('ads');
NINEAU_Config.setSiteName('JobNumber_ClientName');
NINEAU_Config.setSectionName('fireplace');
NINEAU_Config.setSubsectionName('test');
NINEAU_Config.setNielsenEnabled(false);
NINEAU_Config.setAdcEnabled(false);
NINEAU_ThirdParty.initialize();
NINEAU_ThirdParty.renderTracking();

const omnitureTrackingId = NINEAU_Config.getCategory() + ":" + NINEAU_Config.getSiteName() + ":" + NINEAU_Config.getSectionName()  + ":" + NINEAU_Config.getSubsectionName();



export function clickCTA(e) {
    NINEAU_ThirdParty.trackClick(omnitureTrackingId + '_cta_clicked', omnitureTrackingId );
    window.open(appNexusClickTracker+trackingClickURL_masthead, '_blank');
};

export function clickMasthead(e) {
  NINEAU_ThirdParty.trackClick(omnitureTrackingId + '_masthead_clicked', omnitureTrackingId);
  window.open(appNexusClickTracker + trackingClickURL_masthead, '_blank');
};

export function clickWall(e) {

  NINEAU_ThirdParty.trackClick(omnitureTrackingId + '_wallpaper_clicked', omnitureTrackingId);
  window.open(appNexusClickTracker + trackingClickURL_wall, '_blank');
}

