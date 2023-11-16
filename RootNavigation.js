import { createNavigationContainerRef } from '@react-navigation/native';

export const rootNavigation = createNavigationContainerRef();
export const navigate = function (name, params = null) {
    if (rootNavigation.isReady()) {
        rootNavigation.navigate(name, params);
    }
}