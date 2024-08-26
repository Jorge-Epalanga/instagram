import { Image, FlatList, Text } from 'react-native';

import { ImageBookmarks, ImageContent, ImagesFollowersLikers, ImagesStories, ImageUserOfMenu, ImageUserPhoto, TextAddIcon, TextFollowersLikers, TextFollowersLikersSub, TextUserAccountName, TextUserName, TextUsersNameStories, ViewContainer, ViewContent, ViewContentFooter, ViewContentHeader, ViewFollowersLikers, ViewHeader, ViewHeaderOpts, ViewHorizontalLine, ViewImagesStoriesCard, ViewMenu, ViewPostActions, ViewPostOpts, ViewStories, ViewStoriesCard, ViewUserNames } from './home_styles';

import { Users } from '@/src/assets/files/files';
import { Icons } from '@/src/assets/files/files';
import user7 from '@/src/assets/users/user_7_.png';
import user8 from '@/src/assets/users/user_8_.png';
import user6 from '@/src/assets/users/user_6_.png';

const user = Users.find(user => user.name === 'Anaya Epalanga');

const Home = () => {
  return(
    <ViewContainer>

      <ViewHeader>
        <Image source={Icons.Logo}/>
        <ViewHeaderOpts>
          <Image source={Icons.Stroke}/>
          <Image source={Icons.Message}/>
        </ViewHeaderOpts>
      </ViewHeader>

      <ViewStories>
        <FlatList 
          data={Users}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          renderItem={(item) => (
            <ViewStoriesCard>
              <ViewImagesStoriesCard>
                <ImagesStories source={item.item.photo}/>
              </ViewImagesStoriesCard>
              <TextUsersNameStories>{ item.item.name.substring(0, 8).concat('...') }</TextUsersNameStories>
            </ViewStoriesCard>            
          )}
        />

      </ViewStories>

      <ViewContent>        
        <ViewHorizontalLine>
          <Text>_____________________________________________________</Text>
        </ViewHorizontalLine>

        <ViewContentHeader>
          <ImageUserPhoto source={user?.photo} />

          <ViewUserNames>
            <TextUserAccountName>{ user?.name }</TextUserAccountName>
            <TextUserName>{ user?.userName }</TextUserName>
          </ViewUserNames>

          <ViewPostOpts>
            <Image source={Icons.Points}/>
          </ViewPostOpts>
        </ViewContentHeader>

        <ImageContent source={ Icons.Epalanga }/>

        <ViewContentFooter>
          <ViewPostActions>
            <Image source={ Icons.Stroke }/>
            <Image source={ Icons.Comment }/>
            <Image source={ Icons.Share }/>
          </ViewPostActions>
          
          <ImageBookmarks source={ Icons.BookMarks }/>
          
        </ViewContentFooter>
          
        <ViewFollowersLikers>
          <ImagesFollowersLikers source={ user8 }/>
          <ImagesFollowersLikers source={ user7 }/>
          <ImagesFollowersLikers source={ user6 }/>
        </ViewFollowersLikers>

        <TextFollowersLikers>Liked by Mafuta and others.</TextFollowersLikers>
        <TextFollowersLikersSub>Anaya Epalanga my father's enterprises</TextFollowersLikersSub>

        <ViewHorizontalLine>
          <Text>_____________________________________________________</Text>
        </ViewHorizontalLine>

        <ViewMenu>
          <Image source={Icons.Home}/>
          <Image source={Icons.Search}/>
          <TextAddIcon>+</TextAddIcon>          
          <Image source={Icons.Video}/>
          <ImageUserOfMenu source={user?.photo}/>
        </ViewMenu>
      </ViewContent>    

    </ViewContainer>
  );
}

export { Home }
