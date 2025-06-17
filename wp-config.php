<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress-taller' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '6N,+nL3rZC!Hx5OcL8eil76( f[ar/{/9Q)1v`;w4Pp|EuyX[pJ@qEF+40D4WmSy' );
define( 'SECURE_AUTH_KEY',  'XbmwP`{&cnU6pt@}XKdE@nl$&i.K+VYH]w(%~~XKRAyb/m_O6fJ-jpD:q3*xw2gO' );
define( 'LOGGED_IN_KEY',    'Ftu.$~7H{:mW=<D rGIxhJCxrXxoWrN-):#v:~S!t7@B3f1rDRE6[pQCc}YHekox' );
define( 'NONCE_KEY',        ':S}W=Pi7 d~9M?~a !~nCU>{E;udNE&,$9nkdV~FYUn,yyacR:-($WnOO$1ifz[x' );
define( 'AUTH_SALT',        'i/e8%G>Qse((?]X*u%^%(Utq ovM+oI?N6Hp1AKL%L}WS.(S;f`E?%Od$38iODgd' );
define( 'SECURE_AUTH_SALT', 't&|Y`tt]>x<(;p[1$S4!y##Z-r_5I]&0rJzt451.y!gj*^m_W?G7m(8SH`n:J-@L' );
define( 'LOGGED_IN_SALT',   'jJB>6(s>;#zEVRzukyTJrQpOH8JE@&!_I8nSNU2 .tqTYbt#^46=+)F%4wn-z@Ar' );
define( 'NONCE_SALT',       'J}R?>aZ,Hif{P<_w`FU01< $.29y.F, qn@vqn:7*xL&9j/Q<r/`>C_WJ81JAoe7' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_taller';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
