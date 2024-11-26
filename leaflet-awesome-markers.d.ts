declare module 'leaflet' {
  namespace AwesomeMarkers {
    interface IconOptions extends L.IconOptions {
      icon?: string;
      prefix?: string;
      markerColor?: string;
      iconColor?: string;
      extraClasses?: string;
    }

    function icon(options: IconOptions): L.Icon;
  }
}
