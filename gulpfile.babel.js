/*******************************************************************************************
 *  0.- Clean
 *      - clean temp assets
 *          - vendor
 *              - sass
 *      - clean generated resources
 *          - theme
 *              - sass > css
 *      - clean dist resources
 *          - styles
 *          - scripts
 *          - webfonts
 *  1.- Copy necessary assets
 *      - vendor
 *          - sass
 *          - styles
 *          - scripts
 *          - webfonts
 *  2.- Prepare assets
 *      - vendor
 *          - none (get all distributed resources)
 *      - theme
 *          - sass
 *              - compile using vendor sass resources if necessary
 *          - styles
 *              - lint css
 *              - format css
 *              - compress css (if PROD env)
 *         - scripts
 *              - lint scripts
 *              - fomat scripts
 *              - compress scripts (if PROD env)
 * 
 *******************************************************************************/

import gulp from "gulp";












/////////////////////////////////////////////////////////////
// Complex tasks
/////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////
// Public tasks
/////////////////////////////////////////////////////////////