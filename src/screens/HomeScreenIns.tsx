import * as React from 'react';
import { FlatList, RefreshControl, SafeAreaView } from 'react-native';
import { useState } from 'react';
import Post from '../components/Home/Post';
import Stories from '../components/Home/Stories';

const post = [
  {
    user: {
      imageUri:
        'https://file.tinnhac.com/resize/600x-/2020/04/03/20200403104047-41cb.jpg',
      name: 'Dang',
    },
    image:
      'https://file.tinnhac.com/resize/600x-/2020/04/03/20200403104047-41cb.jpg',
    caption: 'Beautiful',
    like: 123457,
    createdAt: '11 minutes ago',
  },
  {
    user: {
      imageUri:
        'https://file.tinnhac.com/resize/600x-/2020/04/03/20200403104047-41cb.jpg',
      name: 'Nhat',
    },
    image:
      'https://file.tinnhac.com/resize/600x-/2020/04/03/20200403104047-41cb.jpg',
    caption: 'Beautiful',
    like: 123457,
    createdAt: '11 minutes ago',
  },
];

const wait = (timeout: any) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

export default function HomeScreenIns({ navigation }: any) {
  const [refreshing, setrefreshing] = useState(false);
  const onRefresh = React.useCallback(() => {
    setrefreshing(true);
    wait(2000).then(() => setrefreshing(false));
  }, []);
  return (
    <SafeAreaView>
      <FlatList
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, idx) => idx.toString()}
        data={post}
        renderItem={({ item }) => <Post post={item} />}
        ListHeaderComponent={<Stories />}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
}
