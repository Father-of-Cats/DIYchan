## Database structure

### Tables 

Users
| id | username | type | pass_hash | datecreated |

User Types
| id | type |

Subchans
| id | name | owner_id |

Posts
| id | user_id | sub_id |

Highlights
| id | sub_id |

Comments
| id | user_id | sub_id |

User Settings
| id | theme_id |