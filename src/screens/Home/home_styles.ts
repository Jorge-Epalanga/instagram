import { styled } from 'styled-components/native';

export const ViewContainer = styled.View`
  flex: 1;
  align-items: center;
  background-color: #000000;
`;

export const ViewHeader = styled.View`
  padding-top: 40px;
  width: 100%;
  align-content: center;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 20px;
`;

export const ViewHeaderOpts = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 10px;
  gap: 30px;
`;

export const ViewStories = styled.View`
  width: 100%;
  padding-left: 20px;
  align-content: center;
  margin-bottom: 10px;
`;

export const ViewStoriesCard = styled.View`
  border-color: #fff;
`;   

export const ViewImagesStoriesCard = styled.View`
  border-color: #F7B5A5;
  border-width: 2px;
  border-radius: 50px;
  margin-right: 15px;
`;

export const ImagesStories = styled.Image`
  width: 65px;
  height: 65px;
  margin: 4px;
  border-radius: 35px;
`;

export const TextUsersNameStories = styled.Text`
  color: #ffffff;
  font-size: 15px;
  margin-top: 10px;
  font-weight: 400;
`;

export const ViewHorizontalLine = styled.View`
  margin-bottom: 15px;
  height: 0.1px;
  background-color: grey;
  width: 100%;
`;

export const ViewContent = styled.View`
  width: 100%;
  align-items: center;
  flex: 1;
`;

export const ViewContentHeader = styled.View`
  width: 100%;
  height: 52px;
  margin-right: 10px;
  margin-left: 10px;
  align-content: center;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: -5px;
`;

export const ImageUserPhoto = styled.Image`
  width: 35px;
  height: 35px;
  border-radius: 35px;
  margin-left: 10px;
`; 

export const ViewUserNames = styled.View`
  margin-left: -200px;
`;

export const TextUserAccountName = styled.Text`
  color: #fff;
  font-size: 16px;
`;

export const TextUserName = styled.Text`
  color: #fff;
  font-size: 12px;
`;

export const ViewPostOpts = styled.View`
  margin-right: 15px;
  padding-top: 13px;
`;

export const ImageContent = styled.Image`
  width: 412px;
  height: 412px;
`;

export const ViewContentFooter = styled.View`
  margin-top: 15px;
  width: 100px;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 20px;
`;

export const ViewPostActions = styled.View`
  align-items: center;
  flex-direction: row;
  margin-left: -150px;
  gap: 20px;
`;

export const ImageBookmarks = styled.Image`
  margin-right: -150px;
`;


export const ViewFollowersLikers = styled.View`
  width: 100%;
  align-items: center;
  flex-direction: row;
  padding-left: 15px;
  padding-right: 15px;
`;

export const ImagesFollowersLikers = styled.Image`
  width: 20px;
  height: 20px;
`;

export const TextFollowersLikers = styled.Text`
  color: #fff;
  font-size: 15px;
  margin-top: -17px;
  margin-right: 60px;
  margin-bottom: 15px;
`;

export const TextFollowersLikersSub = styled.Text`
  color: #fff;
  font-size: 15px;
  margin-left: -110px;
  margin-bottom: 5px;
`;

export const ViewMenu = styled.View`
  margin-top: -35px;
  padding: 30px;
  width: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const ImageUserOfMenu = styled.Image`
  width: 25px;
  height: 25px;
`;

export const TextAddIcon = styled.Text`
  color: #fff;
  font-size: 40px;
`;
